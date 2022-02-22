import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
  it("CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  describe("<CourseList /> have 5 rows:", () => {
    let listCourses;

    beforeEach(() => {
      listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ];
    });

    it("<CourseList /> Header have 2 rows when list not empty", () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      expect(wrapper.find("#CourseList").children()).toHaveLength(2);
    });

    it("<CourseList /> tbody have 3 rows when list is not empty:", () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      expect(wrapper.find("#CourseList tbody").children()).toHaveLength(3);
    });

    it("renders correctly when passing an empty course List", () => {
      const wrapper = shallow(<CourseList />);
      wrapper.setProps({ listCourses: [] });
      expect(wrapper.html().includes("No course available yet")).toBeTruthy();
    });
    it("renders correctly when not passing props", () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.html().includes("No course available yet")).toBeTruthy();
    });
  });
});
