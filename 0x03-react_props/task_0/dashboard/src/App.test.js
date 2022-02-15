import { shallow } from "enzyme";
import App from "./App";

describe("Basic React Tests - <App />", function () {
  it("Should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
