import { useState } from "react";

function ResumeForm({setResumeData, setStage}) {
  const [links, setLinks] = useState([]);
  const [skills, setSkills] = useState(["", "", "", ""]);
  const [education, setEducation] = useState([{ startDate: "", endDate: "", school: "", development: "" }]);
  const [references, setReferences] = useState([]);
  const today = new Date();

  console.log(skills)

  const addLink = () => {
    if (links.length < 5) {
      setLinks([...links, { website: "", url: "" }]);
    }
  };

  const addSkill = () => {
    if (skills.length < 10) {
      setSkills([...skills, ""]);
    }
  };

  const addEducation = () => {
    if (education.length < 5) {
      setEducation([
        ...education,
        { startDate: "", endDate: "", school: "", development: "" },
      ]);
    }
  };

  const addReference = () => {
    if (references.length < 3) {
      setReferences([...references, { name: "", phone: "", email: "" }]);
    }
  };

  const handleFieldChange = (setter, index, field, value) => {
    setter((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      address: e.target.address.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      Links: links,
      Profile: e.target.profile.value,
      Skills: skills,
      Edu: education,
      Ref: references
    };
  
    setResumeData(formData); // Save form data as resume data
    setStage("resume"); // Switch to resume stage
  };

  return (
    <>
      <h1>Create Resume</h1>
      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <fieldset>
          <label htmlFor="firstName">
            First name: <input id="firstName" type="text" placeholder="Jon" required />
          </label>
          <label htmlFor="lastName">
            Last name: <input id="lastName" type="text" placeholder="Snow" required />
          </label>
          <label htmlFor="address">
            Address: <input id="address" type="text" placeholder="123 Crimson Comet Way" required />
          </label>
          <label htmlFor="phone">
            Phone: <input id="phone" type="text" placeholder="xxx-xxx-xxxx" required />
          </label>
          <label htmlFor="email">
            Email: <input id="email" type="email" placeholder="abc@resume.com" required />
          </label>
        </fieldset>



        {/* Links */}
        <fieldset>
          <h3>Links:</h3>
          {links.map((link, index) => (
            <div key={index}>
              <label>
                Website:
                <input
                  type="text"
                  value={link.website}
                  onChange={(e) => handleFieldChange(setLinks, index, "website", e.target.value)}
                  required
                />
              </label>
              <label>
                URL:
                <input
                  type="url"
                  value={link.url}
                  onChange={(e) => handleFieldChange(setLinks, index, "url", e.target.value)}
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={addLink}>
            +
          </button>
        </fieldset>
        <fieldset>
          <label htmlFor="profile">
            <h3>Profile:</h3>
            <textarea id="profile" type="text" />
          </label>
        </fieldset>
        {/* Skills */}
        <fieldset>
          <h3>Skills:</h3>
          {skills.map((skill, index) => (
            <div key={index}>
              <label>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) =>
                    setSkills((prev) =>
                      prev.map((s, i) => (i === index ? e.target.value : s))
                    )
                  }
                  required
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={addSkill}>
            +
          </button>
        </fieldset>

        {/* Education */}
        <fieldset>
          <h3>Education:</h3>
          {education.map((edu, index) => (
            <div key={index}>
              <label>
                Start Date:
                <input
                  type="date"
                  defaultValue={today.toLocaleDateString()}
                  onChange={(e) =>
                    handleFieldChange(setEducation, index, "startDate", e.target.value)
                  }
                  required
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  value={edu.endDate}
                  onChange={(e) =>
                    handleFieldChange(setEducation, index, "endDate", e.target.value)
                  }
                />
              </label>
              <label>
                School/Company:
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) =>
                    handleFieldChange(setEducation, index, "school", e.target.value)
                  }
                  required
                />
              </label>
              <label>
                Professional Development:
                <textarea
                  value={edu.development}
                  onChange={(e) =>
                    handleFieldChange(setEducation, index, "development", e.target.value)
                  }
                  required
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={addEducation}>
            +
          </button>
        </fieldset>

        {/* References */}
        <fieldset>
          <h3>References:</h3>
          {references.map((ref, index) => (
            <div key={index}>
              <label>
                Name:
                <input
                  type="text"
                  value={ref.name}
                  onChange={(e) =>
                    handleFieldChange(setReferences, index, "name", e.target.value)
                  }
                  required
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  value={ref.phone}
                  onChange={(e) =>
                    handleFieldChange(setReferences, index, "phone", e.target.value)
                  }
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={ref.email}
                  onChange={(e) =>
                    handleFieldChange(setReferences, index, "email", e.target.value)
                  }
                  required
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={addReference}>
            +
          </button>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ResumeForm;
