import { ChildAsFc } from "./Child";

const Parent = () => {
  return (
    <ChildAsFc onClick={() => console.log("Clicked")} color="Red">
      sasasas
    </ChildAsFc>
  );
};

export default Parent;
