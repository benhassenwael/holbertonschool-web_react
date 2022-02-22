import { shallow } from "enzyme";
import { Notifications } from "./Notifications";
import NotificationItem from "./NotificationItem";
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
      const listItems = wrapper.find(NotificationItem);
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

  it("when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const wrapper = shallow(<Notifications displayDrawer />);

    console.log = jest.fn();

    const instance = wrapper.instance();

    const id = 5;

    instance.markAsRead(id);

    expect(console.log).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`
    );
    jest.restoreAllMocks();
  });

  it("does not rerender when updating the props of the component with the same list", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );

    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    wrapper.setProps({ listNotifications: listNotifications });

    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

    jest.restoreAllMocks();
  });

  it("does rerender when updating the props of the component with a longer list", () => {
    let listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const listNotifications2 = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: latestNotification } },
    ];

    console.log(listNotifications);
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );

    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    wrapper.setProps({ listNotifications: listNotifications2 });

    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

    jest.restoreAllMocks();
  });
});
