import "./style.css";
import Button from "@mui/material/Button";
import { IoSearch } from 'react-icons/io5'

const Search = () => {
  return (
    <div className='searchBox w-full h-[50px] bg-[#e5e5e5] rounded-md relative p-2'>
        <input type='text' placeholder='Search for products' className='w-full h-[35px] focus:outline-none bg-inherit p-2' />
        <Button className="!absolute top-[5px] right-[8px] z-50 !w-[37px] !min-w-[37px]  !h-[37px] !rounded-full !text-[#2a2a2a]"><IoSearch className="text-[#2a2a2a] text-[22px]" /></Button>
    </div>
  )
}

export default Search