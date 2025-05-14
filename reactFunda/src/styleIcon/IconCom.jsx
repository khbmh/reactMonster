import { IoHome } from 'react-icons/io5';
import { FaTachometerAlt } from 'react-icons/fa';
import { MdAddToHomeScreen } from 'react-icons/md';

const IconCom = () => {
  return (
    <>
      <div
        style={{
          color: 'gold',
          fontSize: '40px',
          marginTop: '15px',
          cursor: 'pointer',
        }}
      >
        <IoHome />
        <FaTachometerAlt size={40} color="blue" />
      </div>
      <MdAddToHomeScreen size={30} color="gray" />
    </>
  );
};

export default IconCom;
