import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { useState } from "react";
import ContactExperience from "./ContactExperience";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeFormData = (value: string, field: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="flex-center section-padding"
      id="contact"
      onSubmit={handleSubmit}
    >
      <div className="h-full w-full px-5 md:px-10">
        <SectionHeader title="Let's get in touch" subTitle="Contact Info" />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form className="flex w-full flex-col gap-7">
                <div className="mb-6">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    onChange={(e) =>
                      handleChangeFormData(e.target.value, "name")
                    }
                    value={form["name"]}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    onChange={(e) =>
                      handleChangeFormData(e.target.value, "email")
                    }
                    value={form["email"]}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    required
                    onChange={(e) =>
                      handleChangeFormData(e.target.value, "message")
                    }
                    value={form["message"]}
                  />
                </div>
                <Button disabled={isLoading} img="/images/arrow-down.svg">
                  Send message
                </Button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7">
            <div className="h-full w-full overflow-hidden rounded-3xl bg-[#cd7c2e] hover:cursor-grab">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
