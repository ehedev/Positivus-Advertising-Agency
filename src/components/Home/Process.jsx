import React from "react";
import { Accordion } from "react-bootstrap";
import SectionHeader from "./SectionHeader";
import { processesData } from "../../data/processesData";

const Process = () => {
  return (
    <section className="process-section py-5">
      <div className="container">
        <SectionHeader
          title="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />

        {/* Accordion Section */}
        <div className="mt-4">
          <Accordion defaultActiveKey="0" flush>
            {processesData.map((step, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                className="rounded-5"
                key={index}
              >
                <Accordion.Header>
                  <span className="step-number">{step.step}</span>
                  {step.title}
                </Accordion.Header>
                <Accordion.Body>{step.description}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Process;