import React, { useState } from "react";

const doctorList = [
  "George William",
  "Ganesh Ram",
  "Helen Jones",
  "Kofi Owusu Boahene",
  "Akwasi Owusu",
  "Samuel Mensah",
  "kofi Boahene",
];

export default function PatientForm() {
  const [formData, setFormData] = useState({
    date: "",
    timeRange: "09:00 AM - 10:00 AM",
    patientName: "",
    phone: "",
    gender: "",
    email: "",
    appointmentPriority: "",
    liveConsultant: "",
    doctor: "",
    status: "",
    nurse: "",
    caseId: "CAS1779344205",
    encounterId: "ENC1779344205",
    paymentMode: "Cash",
    paymentStatus: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg pt-5 rounded-lg overflow-hidden">
      {/*THis is  Header */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-start">
  
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Select Patient</label>
    <div className="relative">
      <select className="bg-white text-gray-700 border border-gray-300 rounded px-4 py-2 pr-8">
        <option>Select Patient</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>
    </div>
  </div>

  
  <div className="flex-1"></div>

  
  <div className="flex flex-col items-start">
    <label className="text-sm font-medium mb-1">New Patient</label>
    <button className="bg-white text-blue-500 px-4 py-2 rounded font-medium hover:bg-gray-50 flex items-center">
      <span className="mr-2 text-lg">+</span>
      Add Patient
    </button>
  </div>

 
  <button
    className="text-white hover:text-gray-200 text-2xl font-bold ml-4"
    title="Close"
  >
    
  </button>
</div>

      {/* Form  */}
      <form className="p-6" onSubmit={handleSave}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="mm/dd/yyyy"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Range <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="timeRange"
              value={formData.timeRange}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Patient Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select className="border border-gray-300 rounded-l px-3 py-2 bg-gray-50 text-gray-600">
                <option>233 (Gha)</option>
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                className="border border-gray-300 rounded-r px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Doctor <span className="text-red-500">*</span>
            </label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select</option>
              {doctorList.map((d, idx) => (
                <option key={idx} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Priority
            </label>
            <select
              name="appointmentPriority"
              value={formData.appointmentPriority}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>-Select-</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Live Consultant <span className="text-red-500">*</span>
            </label>
            <select
              name="liveConsultant"
              value={formData.liveConsultant}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>-Select-</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>-Select-</option>
              <option value="scheduled">Scheduled</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nurse
            </label>
            <input
              type="text"
              name="nurse"
              value={formData.nurse}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Case Id
            </label>
            <input
              type="text"
              value={formData.caseId}
              readOnly
              className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Encounter Id
            </label>
            <input
              type="text"
              value={formData.encounterId}
              readOnly
              className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Mode
            </label>
            <select
              name="paymentMode"
              value={formData.paymentMode}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>Cash</option>
              <option>Card</option>
              <option>UPI</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Status
            </label>
            <select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>-Select-</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>
        </div>

       
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
