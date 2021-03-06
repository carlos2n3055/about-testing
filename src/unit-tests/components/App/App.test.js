import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import App from "../../../components/App/App.tsx";

configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect
}));

describe("<App />", () => {
  let wrapper;
  let rootRef;

  beforeEach(() => {
    wrapper = mount(<App />);

    rootRef = wrapper.find(".App");
  });

  it("login button must be present", () => {
    expect(rootRef.find(".btn").text()).toBe("Login");
  });

  //   it("Course table filters must be present", () => {
  //     let searchRef = wrapper.find(".search");
  //     let dashboardSectionRef = wrapper.find(".page-dashboard");

  //     expect(searchRef.length).toBe(1);
  //     expect(dashboardSectionRef.at(0).length).toBe(1);
  //   });

  //   it("create a new course button must call to the SHOW_COURSE_PANEL action", async () => {
  //     await actImmediate(wrapper, async () => {
  //       let courseButtonRef = rootRef.find(".App__new-course-dropdown").at(0).find("button");
  //       courseButtonRef.simulate("click");

  //       rootRef = wrapper.find(".App");
  //       rootRef.find(".App__create-new-course button").at(0).simulate("click");

  //       expect(mockDispatch.mock.calls[2][0].type).toBe("SHOW_COURSE_PANEL");
  //     });
  //   });
});
