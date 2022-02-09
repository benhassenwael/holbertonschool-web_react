import { shallow } from "enzyme";
import App from "./App";

describe("Basic React Tests - <App />", function () {
  it("Should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should render div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header")).toHaveLength(1);
  });

  it("Should render div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body")).toHaveLength(1);
  });

  it("Should render div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer")).toHaveLength(1);
  });
});
