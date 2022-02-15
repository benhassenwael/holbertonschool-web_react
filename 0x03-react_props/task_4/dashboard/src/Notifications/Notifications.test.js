import { shallow } from "enzyme";
import { Notifications } from "./Notifications";

describe("Basic React Tests - <Notifications />", function () {
  it("Should render without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should render three list items", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
  });

  it("Should render the correct string", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  it("first <NotificationItem /> node render the right html", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find("ul").children().first().html()).toBe(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('menuItem with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('Notification with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(0);
  });

  it('menuItem with displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(1);
  });
});
