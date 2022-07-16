import React from "react";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
import "./Faq.css";
import { ContactsOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

const Faq = () => {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>
            Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam
          </p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel
            header="What is the living cost in UK for international students?"
            key="1"
          >
            <p>
              Living cost in UK is considerably less than other countries like
              USA, CANADA and AUSTRALIA. Living cost depends on which area of UK
              you chose to stay. International students are required to stay
              within close proximity of the university. Living cost in UK may
              vary from £1040 - £1360 per month considering location of
              accommodation. It is cheaper to stay in similar cities and vice
              versa in bigger cities.
            </p>
          </Panel>
          <Panel
            header="Is it possible for international students to get medical treatment?"
            key="2"
          >
            <p>
              As a student you will get free medical treatment under the
              International Health Surcharge (HIS). If you show your health card
              in any emergency situation, you will get various test, medicine
              and doctor checkup for free.
            </p>
          </Panel>
          <Panel
            header="Can students apply for study in UK without IELTS?"
            key="3"
          >
            <p>
              Definitely, it is possible to apply to universities in UK without
              IELTS. Many universities accept other language certificates such
              as – OITC, DUOLINGO or even MOI or simply providing proof that you
              have 75% or more English score in both secondary and higher
              secondary exams. Moreover, some university take their own language
              test over zoom/ google meet or other video calling platforms.{" "}
            </p>
          </Panel>
          <Panel
            header="How many students come to the UK for study every year?"
            key="4"
          >
            <p>
              Every year almost 300,000 students come for the purpose of study.{" "}
            </p>
          </Panel>
          <Panel header="What are the other important steps to follow?" key="5">
            <p>
              There are several steps for a tier-4 visa. For instance, you will
              need to gain 30 points for CAS, 10 points in maintenance
              requirements. Some important steps to apply include- Career
              Counselling Select Right subject and University Submit Application
              Get Offer letter and so many on.
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            HF Consultancy is a firm of thriving entrepreneurs and professionals
            with promise of commitment and honesty assisting prospective
            students for higher studies in more than 500 universities from
            around the world offering assistance, counselling and coaching.
          </p>

          <Link className="btn reg-btn mb-2 " to="/contact">
            <ContactsOutlined style={{ fontSize: "50px" }} /> Email your
            question
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
