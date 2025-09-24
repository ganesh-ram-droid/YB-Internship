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

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Handle input change
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.timeRange) newErrors.timeRange = "Time range is required";
    if (!formData.patientName) newErrors.patientName = "Patient name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.doctor) newErrors.doctor = "Doctor selection is required";
    if (!formData.liveConsultant) newErrors.liveConsultant = "Live consultant selection is required";
    return newErrors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setShowModal(true); // Show modal with form data
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg pt-5 rounded-lg overflow-hidden">
      {/* this is Header */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-start">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Select Patient</label>
          <div className="relative">
            <select className="bg-white text-gray-700 border border-gray-300 rounded px-4 py-2 pr-8">
              <option>Select Patient</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label className="text-sm font-medium mb-1">New Patient</label>
          <button className="bg-white text-blue-500 px-4 py-2 rounded font-medium hover:bg-gray-50 flex items-center">
            <span className="mr-2 text-lg">+</span>
            Add Patient
          </button>
        </div>
      </div>
{/* this is my form */}
    
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
              className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 ${
                errors.date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
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
              className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 ${
                errors.timeRange ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.timeRange && <p className="text-red-500 text-sm">{errors.timeRange}</p>}
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
              className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 ${
                errors.patientName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.patientName && <p className="text-red-500 text-sm">{errors.patientName}</p>}
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
                className={`border rounded-r px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Doctor <span className="text-red-500">*</span>
            </label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={onInputChange}
              className={`w-full border rounded px-3 py-2 ${
                errors.doctor ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select</option>
              {doctorList.map((d, idx) => (
                <option key={idx} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.doctor && <p className="text-red-500 text-sm">{errors.doctor}</p>}
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
              className={`w-full border rounded px-3 py-2 ${
                errors.liveConsultant ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option>-Select-</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.liveConsultant && <p className="text-red-500 text-sm">{errors.liveConsultant}</p>}
          </div>

      
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Nurse</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Case Id</label>
            <input
              type="text"
              value={formData.caseId}
              readOnly
              className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Encounter Id</label>
            <input
              type="text"
              value={formData.encounterId}
              readOnly
              className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Mode</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
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

      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Patient Form Data</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm max-h-80 overflow-y-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
