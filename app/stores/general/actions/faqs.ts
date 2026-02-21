// stores/general/home.actions.ts
import type { GeneralState } from "~/types/general.state";

export const faqsActions = {
  async fetchFaqsData(this: GeneralState & any) {
    if (this.faqs && this.faqs !== null) return;
    try {
      this.isLoadingData = true;
      await new Promise<void>((resolve) => setTimeout(() => {
        const { data } = {
          data: {
            label: "Have A Question?",
            title: "Frequently Asked Question",
            faqs: [
              {
                id: 1,
                question: "What is The Training Hub?",
                answer:
                  "The Training Hub is a professional training and development company established in 2019, specializing in practical, results-driven learning solutions for individuals and organizations across Egypt, Kenya, and Saudi Arabia.",
              },
              {
                id: 2,
                question: "What types of training programs do you offer?",
                answer:
                  "We offer a wide range of programs including:\r\n\r\nLeadership & Management\r\n\r\nSales & Business Development\r\n\r\nDigital Marketing & AI\r\n\r\nData Analysis (Excel & Power BI)\r\n\r\nEmotional Intelligence & Communication\r\n\r\nChange & Conflict Management\r\n\r\nIT & Professional Certifications\r\n\r\nOur programs are designed for real workplace application.",
              },
              {
                id: 3,
                question: "Are your training programs accredited?",
                answer:
                  "Yes.\r\nThe Training Hub is:\r\n\r\nACTD Accredited (Accrediting Council for Training & Development)\r\n\r\nCPD Certified Provider for selected programs\r\n\r\nThis ensures our training meets recognized international quality standards.",
              },
              {
                id: 4,
                question: "Who can attend your courses?",
                answer:
                  "Our programs are suitable for:\r\n\r\nProfessionals at all career levels\r\n\r\nManagers and team leaders\r\n\r\nSales, HR, and operations teams\r\n\r\nFresh graduates seeking career acceleration\r\n\r\nOrganizations looking to upskill their workforce",
              },
              {
                id: 5,
                question: "Do you offer corporate or in-house training?",
                answer:
                  "Yes. We provide On-Site Corporate Training (In-House) tailored to your organization\u2019s needs, objectives, and industry, delivered at your location or our training facilities.",
              },
            ],
          },
        };
        this.faqs = data;
        resolve();
      }, 400));
    } finally {
      this.isLoadingData = false;
    }
  },
};
