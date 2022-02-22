import { shallow } from "enzyme";
import { Notifications } from "./Notifications";
import { getLatestNotification } from "../utils";

describe("Basic React Tests - <Notifications />", function () {
  it("Should render without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("menuItem with displayDrawer false", () => {
    const wrapper = shallow(<Notifications />);
    const mItem = wrapper.find("div.menuItem");
    expect(mItem).toHaveLength(1);
  });

  it("Notification with displayDrawer false", () => {
    const wrapper = shallow(<Notifications />);
    const dNoti = wrapper.find("div.Notifications");
    expect(dNoti).toHaveLength(0);
  });

  it("menuItem with displayDrawer true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const mItem = wrapper.find("div.menuItem");
    expect(mItem).toHaveLength(1);
  });

  it("displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const dNoti = wrapper.find("div.Notifications");
    expect(dNoti).toHaveLength(1);
  });

  let listNotifications;
  let latestNotification;

  describe("Notifications with listNotifications", () => {
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];
    });

    it("Notifications renders Notification Items and items have correct html", () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists()).toBeTruthy();
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toBeDefined();
      expect(listItems).toHaveLength(3);
      expect(listItems.at(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
      expect(listItems.at(1).html()).toEqual(
        '<li data-notification-type="urgent">New resume available</li>'
      );
      expect(listItems.at(2).html()).toEqual(
        `<li data-notification-type="urgent">${latestNotification}</li>`
      );
    });
  });

  describe("Notifications without listNotifications or empty listNotifications", () => {
    beforeEach(() => {
      listNotifications = [];
    });

    it("Notifications renders Notification Item correct with empty listNotifications", () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists()).toBeTruthy();
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(0);
    });

    it("Notifications renders Notification Item correct without listNotifications", () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(0);
    });
  });
});
