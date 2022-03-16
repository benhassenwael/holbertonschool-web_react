import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const li = wrapper.find("li");
    expect(li).toHaveLength(1);
    expect(li.text()).toEqual("test");
    expect(li.prop("data-notification-type")).toEqual("default");
  });

  it("renders html prop", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.html()).toBe(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });
});
