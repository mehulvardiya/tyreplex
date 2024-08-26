import React from "react";

const Main = () => {
  return (
    <div className="container">
      <div className="col-12 shadow-box bg-qna-pink pb-0 rounded-bottom-0 mx-0 mb-0">
        <div className="row py-2">
          <div className="col-sm-6 col-9 askQuestion">
            <h2 className="fw-bold mb-1">Have a question about Tyres?</h2>
            <p className="mt-2 text-muted mb-2">
              Get an answer in 24 hours from our experts.
            </p>
            <div className="col-12">
              <div className="row">
                <div className="col-sm-8">
                  <p className="invalid-question text-danger-custom d-none">
                    Please Enter Valid Question.
                  </p>
                  <div className="d-none question_thank">
                    <p className="mb-0">
                      Thankyou for asking question, we will review and provide
                      you an expert answer.
                    </p>
                  </div>
                </div>
                <div className="col-auto px-0"></div>
              </div>
            </div>
            <div className="col-12">
              <form
                action="submit"
                target="_top"
                className="col-12"
                onsubmit="return false;"
                autocomplete="nope"
              >
                <input
                  type="hidden"
                  name="askQuestion_id"
                  id="askQuestion_id"
                  autocomplete="nope"
                />
                <div className="row align-items-center d-flex">
                  <div className="col-sm-10 col-12">
                    <input
                      placeholder="Ask or search your question"
                      name="askQuestion_des"
                      className="form-control scrollbar-near-moon askQuestion_des mb-2"
                      data-capture="event"
                      data-cat="Ask a Question"
                      data-act="Click"
                      data-lbl="Question Description"
                      autocomplete="nope"
                      spellcheck="false"
                      id="askquestions"
                    />
                  </div>
                  <div className="col-sm-auto px-0 col-12 mt-1 mt-sm-0 text-sm-start text-center">
                    <button
                      type="submit"
                      className="btn theme-btn question_submit_btn py-2 my-0 border-0 d-none"
                      data-capture="event"
                      data-cat="Ask a Question"
                      data-act="Click"
                      data-lbl="Submit button"
                    >
                      Ask
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-4 col-3 px-sm-0 d-flex align-items-center ml-auto justify-content-sm-end">
            <span className="question-banner">
              <img
                className="img-fluid lazy"
                width="70"
                height="70"
                data-original="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&amp;tr=q-60"
                src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&amp;tr=q-60"
                alt="Have a Question"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
