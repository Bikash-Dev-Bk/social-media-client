import React, { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/about")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);

  const handleAbout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const university = form.phone.value;
    const address = form.location.value;

    console.log("inside modal", name, email, university, address);
  };

  return (
    <div className="bg-base-200 my-10">
      <div>
        <h1 className="text-5xl font-semibold py-6 text-center">About Me</h1>
        <div className="card-actions justify-end pr-10">
          <label htmlFor="booking-modal" className="btn btn-primary">
            Edit
          </label>
        </div>
      </div>

      {about.map((abt) => (
        <div key={abt._id} abt={abt} className="flex justify-center">
          <div>
            <img src="https://i.ibb.co/DVz12CG/300x300.jpg" alt="Album" />
          </div>
          <div className="p-12">
            <h1 className="text-3xl font-bold">Name: {abt.name}</h1>
            <p className="text-xl font-semibold">
              University: {abt.university}
            </p>
            <p className="text-xl font-semibold">Email: {abt.email}</p>
            <p className="text-xl font-semibold">Address: {abt.address}</p>
          </div>

          <>
            <input
              type="checkbox"
              id="booking-modal"
              className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box relative">
                <label
                  htmlFor="booking-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <form onSubmit={handleAbout} className="grid grid-cols-1 gap-0">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      defaultValue={abt.name}
                      className="input w-full input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">University</span>
                    </label>
                    <input
                      name="university"
                      type="text"
                      defaultValue={abt.university}
                      className="input w-full input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="text"
                      placeholder="Email"
                      defaultValue={abt.email}
                      className="input w-full input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      name="address"
                      type="text"
                      placeholder="Address"
                      defaultValue={abt.address}
                      className="input w-full input-bordered"
                      required
                    />
                  </div>

                  <div className="modal-action">
                    <button>
                      <label
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                      >
                        Save
                      </label>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default About;
