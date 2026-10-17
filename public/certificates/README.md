# Certificates Directory

Store all your verified certificate files here (both PDF documents and images).

### Current Integrated Certificates:
1. `marketing-analytics-foundations-linkedin.pdf` - LinkedIn Learning: Marketing Analytics Foundations (Shea Hanson)
2. `power-bi-for-beginners-simplilearn-microsoft.pdf` - Microsoft / Simplilearn: Power BI for Beginners (Code: 10724511)
3. `introduction-to-generative-ai-studio-simplilearn-google.pdf` - Google Cloud / Simplilearn: Introduction to Generative AI Studio (Code: 10722690)
4. `digital-marketing-lernx.jpg` - Lernx: Digital Marketing (UID: 0fmbrq9ent6)
5. `project-management-lernx.jpg` - Lernx: Project Management (UID: ygsm8sjb5wm)

---

### How to Add a New Certificate Later:

#### Step 1: Copy your file here
- For PDF certificates: drop your PDF file in this directory (e.g. `public/certificates/your-cert.pdf`).
- For image certificates: drop your image file in this directory (e.g. `public/certificates/your-cert.jpg`).

#### Step 2: Add an entry in `src/data/portfolioData.js`
Open `src/data/portfolioData.js` and add an entry inside the `certificationsData` array:

```javascript
{
  id: "cert-6",
  title: "Your Certification Title",
  issuer: "Issuing Organization",
  issueDate: "Month Year",
  type: "pdf", // use "pdf" for PDF or "image" for JPG/PNG
  fileUrl: "/certificates/your-cert.pdf",
  credentialId: "Certificate ID / Verification Code",
  skillsCovered: ["Skill 1", "Skill 2"],
  description: "Summary of topics and competencies verified."
}
```

The website will automatically render the new card, apply the appropriate badge, update the filter counter, and wire up the View Certificate link!
