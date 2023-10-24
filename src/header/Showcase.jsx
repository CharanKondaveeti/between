// prettier-ignore
function Showcase() {
  const parentStyles =
    " flex-1 px-10 grid grid-cols-2 grid-rows-1 items-center gap-10 py-5";
  const h1Styles = "font-gtMedium text-8xl  mb-10";

  return (
    <div className={parentStyles}>
      <div className="pl-10 flex flex-col items-start	">
        <h1 className={h1Styles}>Stay curious</h1>

        <p className="whitespace-pre-line text-2xl mb-10">
          {"Discover stories, thinking, and expertise from writers on any topic."
            .split("<br/>")
            .join("\n")}
        </p>

        <button className="text-[#f5f5f5] text-xl font-poppins px-16 py-2 bg-stone-950 rounded-full">
          Start reading
        </button>
      </div>
      <div className="h-100p grid grid-cols-20 grid-rows-12 grid-flow-col">
        {Array.from({ length: 240 }, (_, i) => (
          <p
             className={`${ 
              ((i > 83 && i < 96) || 
              (i === 96 || i ===108 || i === 120 || i === 132 || i === 144 || i === 156 || i === 149 || i ===150 || i ===137 ||  i === 107 || i === 119 || i === 131 || i === 143 || i === 155) || 
              (i>=156 && i<=160 ) || 
              (i>=163 && i<=167)) 
              // 0-> 0.3s
              // 1-> 0.3 + 0.1s
              // 2-> 0.3 + 0.2s
              ? "visible" : "invisible" } text-2xl font-semibold animate-[blink_1s_infinite_backwards]  ${i} `}
            key={i}
            // dynamic animation delay
            style={{
              animationDelay: `${0.5 + (i/10)}s`
            }}
          >
            B
          </p>
        ))}
      </div>
    </div>
  );
}

export default Showcase;
