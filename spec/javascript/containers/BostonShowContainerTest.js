import BostonShowContainer from "../../../app/javascript/react/containers/BostonShowContainer";
import BostonTile from "../../../app/javascript/react/components/BostonTile";
import MapContainer from "../../../app/javascript/react/containers/MapContainer";

import fetchMock from "fetch-mock";
import "../testHelper.js";

describe("BostonShowContainer", () => {
  let wrapper, data;

  beforeEach(() => {
    data = {
      restaurants: [
        {
          id: 1,
          businessname: "100 Percent Delicia Food",
          legalowner: "BRENNAN PATRICK E",
          namelast: "Marte",
          namefirst: "Civelis",
          licenseno: "87059",
          licstatus: "Active",
          resultdttm: "2013-02-15 12:19:42",
          viollevel: "*",
          violdesc: "Non-Food Contact Surfaces",
          violstatus: "Fail",
          statusdate: nil,
          comments: "Provide glass storage rack.",
          address: "635   Hyde Park AVE",
          city: "Roslindale",
          state: "MA",
          zip: "2131",
          location: "(42.278590000, -71.119440000)"
        }
      ]
    }
    fetchMock.get("/api/v1/boston_restaurants/1", {
      status: 200,
      body: data
    });
      wrapper = mount(<BostonShowContainer params={{ id: 1 }} />);
  });

  it("should render a BostonTile component", done => {
    setTimeout(() => {
      expect(wrapper.find(BostonTile)).toBePresent();
      done();
    }, 0);
  });

  it("should render the BostonTile Component with specific props", done => {
    setTimeout(() => {
      expect(wrapper.find(BostonTile).props().id).toEqual(1);
      expect(wrapper.find(BostonTile).props().reportDate).toEqual("2013-02-15 12:19:42");
      expect(wrapper.find(BostonTile).props().violLevel).toEqual("*");
      expect(wrapper.find(BostonTile).props().violStatus).toEqual("Fail");
      expect(wrapper.find(BostonTile).props().comments).toEqual("Provide glass storage rack.");
      done();
    }, 0);
  });

  it("should render a MapContainer component", done => {
    setTimeout(() => {
      expect(wrapper.find(MapContainer)).toBePresent();
      done();
    }, 0);
  });

  it("should render the MapContainer component with specific props", done => {
    setTimeout(() => {
      expect(wrapper.find(MapContainer).props().lat).toEqual(42.278590000);
      expect(wrapper.find(MapContainer).props().long).toEqual(-71.11944000);
      expect(wrapper.find(MapContainer).props().name).toEqual("100 Percent Delicia Food");
      done();
    }, 0);
  });

})
