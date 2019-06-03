import CambridgeShowContainer from "../../../app/javascript/react/containers/CambridgeShowContainer";
import CambridgeTile from "../../../app/javascript/react/components/CambridgeTile";
import MapContainer from "../../../app/javascript/react/containers/MapContainer";

import fetchMock from "fetch-mock";
import "../testHelper.js";

describe("CambridgeShowContainer", () => {
  let wrapper, data;

  beforeEach(() => {
    data = {
      restaurants: [
        {
          id: 11,
          address: "496 Massachusetts Ave Cambridge, MA (42.364078, -71.1015)",
          establishment_name: "Clover",
          code_description: "Permit to Operate",
          date_cited: "04/21/2015 12:00:00 AM",
          date_corrected: "05/07/2019 06:00:32 AM",
          status: "Cited"
        }
      ]
    }
    fetchMock.get("/api/v1/cambridge_restaurants/11", {
      status: 200,
      body: data
    });
      wrapper = mount(<CambridgeShowContainer params={{ id: 11 }} />);
  });

  it("should render a CambridgeTile component", done => {
    setTimeout(() => {
      expect(wrapper.find(CambridgeTile)).toBePresent();
      done();
    }, 0);
  });

  it("should render the CambridgeTile Component with specific props", done => {
    setTimeout(() => {
      expect(wrapper.find(CambridgeTile).props().id).toEqual(11);
      expect(wrapper.find(CambridgeTile).props().codeDescription).toEqual("Permit to Operate");
      expect(wrapper.find(CambridgeTile).props().dateCited).toEqual("04/21/2015 12:00:00 AM");
      expect(wrapper.find(CambridgeTile).props().dateCorrected).toEqual("05/07/2019 06:00:32 AM");
      expect(wrapper.find(CambridgeTile).props().status).toEqual("Cited");
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
      expect(wrapper.find(MapContainer).props().lat).toEqual(42.364078);
      expect(wrapper.find(MapContainer).props().long).toEqual(-71.1015);
      expect(wrapper.find(MapContainer).props().name).toEqual("Clover");
      done();
    }, 0);
  });

})
