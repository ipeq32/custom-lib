import { custom } from "@jotai/atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";
import React from "react";

type Props = {};

const customHook = () => {
  const [customVal, setCustomVal] = useAtom(custom.atom);
  useEffect(() => {
    console.log("customHook");
  }, []);
  return { customVal, setCustomVal };
}

const useCustom: React.FC<Props> = ({ }) => {
  return (
    <div>
    <h1>useCustom < /h1>
    < button onClick = {() => custom.set("custom")}> set custom < /button>
      < button onClick = {() => custom.set("custom2")}> set custom2 < /button>
        < /div>
  )
};

export default useCustom;
