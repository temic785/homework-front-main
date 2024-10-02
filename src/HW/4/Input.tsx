import React, {ChangeEvent} from "react";
import * as test from "node:test";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText:(currentText:string)=>void  // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		// НУЖНО ДОПИСАТЬ
		props.setCurrentText(event.currentTarget.value);
	};

	return (
	  <input  id={'hw04-input'} type="text" value={props.currentText}  onChange={onChangeHandler} />
	);
};
