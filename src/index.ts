import './index.css';
import { mount } from 'ripple';
import { App } from './App.ripple';
import {render} from "ripple/server"
// const { head, body, css } = await render(App);

// console.log(head, body)
mount(App, {
	target: document.getElementById('root'),
});

