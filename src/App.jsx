import styles from "./App.module.css";
const App = () => {
  return (
    <div
      className={`${styles.appBackground} flex flex-col justify-center items-center m-[auto] mt-[154px] border border-[#262626] rounded-[12px] max-w-[358px] min-h-[344px] lg:max-w-[1280px] lg:flex-row lg:gap-[100px]  lg:min-h-[236px]`}
    >
      <div className="w-[100%] max-w-[298px] lg:max-w-[911px]">
        <h2 className="font-bold text-[26px] text-[white] lg:text-[28px] text-center lg:text-start">
          Start your free trial today!
        </h2>
        <p className="mt-[10px] text-[#999999] text-[14px] text-center lg:text-start">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>
      <button className="bg-[#E50000] mt-[50px] lg:mt-[0px] rounded-[8px] w-[149px] min-h-[49px] text-[14px] text-[white] cursor-pointer">
        Start a Free Trail
      </button>
    </div>
  );
};

export default App;
