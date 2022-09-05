// https://www.testdome.com/questions/react-js/focusable-input/57708?generator=104

import { useLayoutEffect, useRef } from "react";

type Props = {
  shouldFocus: boolean;
};

export const FocusableInput = (props: Props) => {
  const { shouldFocus } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (shouldFocus && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <h2>FocusableInput</h2>
      <input ref={inputRef} />
    </>
  );
};

export default FocusableInput;
