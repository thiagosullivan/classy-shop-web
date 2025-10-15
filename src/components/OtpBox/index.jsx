import React, { useEffect, useRef, useState } from "react";

export function OtpBox({ length = 6, onVerify, onResend, resendDelay = 30 }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [timeLeft, setTimeLeft] = useState(resendDelay);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);

  // Focus no primeiro input ao montar
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Timer para reenvio
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleChange = (index, value) => {
    // Permite apenas números
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Foca no próximo input
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Verifica se todos os campos estão preenchidos
    if (newOtp.every(digit => digit !== "")) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace - limpa e volta para input anterior
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);

    if (/^\d+$/.test(pasteData)) {
      const newOtp = [...otp];
      pasteData.split("").forEach((digit, index) => {
        if (index < length) {
          newOtp[index] = digit;
        }
      });
      setOtp(newOtp);

      // Foca no último input preenchido
      const lastFilledIndex = Math.min(pasteData.length - 1, length - 1);
      inputRefs.current[lastFilledIndex].focus();
    }
  };

  const handleVerify = async code => {
    setIsVerifying(true);
    try {
      await onVerify(code);
    } catch (error) {
      console.error("Erro na verificação:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = () => {
    setTimeLeft(resendDelay);
    setOtp(Array(length).fill(""));
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    onResend?.();
  };

  const isOtpComplete = otp.every(digit => digit !== "");

  return (
    <div className="verify-otp">
      <div className="otp-header">
        {/* <h2 className="text-2xl font-bold text-center mb-2">Verificação OTP</h2> */}
        <p className="text-gray-600 text-center !mb-4">
          Digite o código de {length} dígitos enviado para você
        </p>
      </div>

      <div className="otp-inputs flex justify-center gap-2 !mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={digit}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:!border-primary focus:outline-none transition-colors"
            disabled={isVerifying}
          />
        ))}
      </div>

      <div className="otp-actions">
        <button
          onClick={() => handleVerify(otp.join(""))}
          disabled={!isOtpComplete || isVerifying}
          className="cursor-pointer w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors !mb-4"
        >
          {isVerifying ? "Verificando..." : "Verificar Código"}
        </button>

        <div className="text-center">
          {timeLeft > 0 ? (
            <p className="text-gray-500">Reenviar código em {timeLeft}s</p>
          ) : (
            <button
              onClick={handleResend}
              className="text-primary hover:text-primary font-medium"
            >
              Reenviar código
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
