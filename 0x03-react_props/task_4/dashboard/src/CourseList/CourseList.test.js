
import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
  it("CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  describe('<CourseList /> have 5 rows:', () => {
    it('<CourseList /> Header have 2 rows', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.find('#CourseList').children()).toHaveLength(2);
    });
    it('<CourseList /> tbody have 3 rows:', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.find('#CourseList tbody').children()).toHaveLength(3);
    });
  });
});