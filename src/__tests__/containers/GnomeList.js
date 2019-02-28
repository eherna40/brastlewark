import * as React from "react";
import { GnomeList } from "../../containers/GnomeList";
import { createShallow } from "@material-ui/core/test-utils";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Results", () => {
  let props;
  beforeEach(() => {
    props = {
      population: [
        {
          id: 0,
          name: "Tobus Quickwhistle",
          thumbnail:
            "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
          age: 306,
          weight: 39.065952,
          height: 107.75835,
          hair_color: "Pink",
          professions: [
            "Metalworker",
            "Woodcarver",
            "Stonecarver",
            " Tinker",
            "Tailor",
            "Potter"
          ],
          friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
        },
        {
          id: 1,
          name: "Tobus Quickwhistle",
          thumbnail:
            "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
          age: 306,
          weight: 39.065952,
          height: 107.75835,
          hair_color: "Pink",
          professions: [
            "Metalworker",
            "Woodcarver",
            "Stonecarver",
            " Tinker",
            "Tailor",
            "Potter"
          ],
          friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
        }
      ],
      idShowDetail: 0
    };
  });

  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("Should show 2 Inhabitants", () => {
    const wrapper = shallow(<GnomeList {...props} />);
    expect(wrapper.find(".card-gnome").length).toEqual(2);
  });
});
