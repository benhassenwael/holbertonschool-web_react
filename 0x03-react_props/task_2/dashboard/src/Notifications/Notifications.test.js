import { shallow } from "enzyme";
import {Notifications} from "./Notifications";

describe("Basic React Tests - <Notifications />", function () {
  it("Should render without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should render three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
  });

  it("Should render the correct string", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  it('first <NotificationItem /> node render the right html', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find("ul").children().first().html()).toBe("<li data-notification-type=\"default\">New course available</li>")
})
});
