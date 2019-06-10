import CambridgeSearchForm from "../../../app/javascript/react/containers/CambridgeSearchForm";

import fetchMock from "fetch-mock";
import "../testHelper.js";

describe("CambridgeSearchForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CambridgeSearchForm />);
  })

  it("should post search results", done => {
    let params = {
      formPayload: {
        "Clover"
      }
    };

    fetchMock.post("/api/v1/cambridge_restaurants/search.json", {
      status: 201,
      body: params
    });
    setTimeout(() => {
      let listItemCount = wrapper.find("li").length;
      wrapper.find("#submit-button").simulate("submit");
      setTimeout(() => {
        expect(wrapper.find("li").length).toEqual(listItemCount + 1);
        done();
      }, 0);
    }, 0);
  });

})
