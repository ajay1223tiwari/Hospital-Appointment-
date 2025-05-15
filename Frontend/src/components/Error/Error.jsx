/* eslint-disable react/prop-types */
const Error = ({ errMessage }) => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex text-red-600 text-[20px] leading-[30px] font-[600]">
          {errMessage}
        </div>
      </div>
    );
  };
  
  export default Error;