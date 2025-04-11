import React from 'react';

// const EQUIOMENT_TYPE = ['WMS', 'Invrter', 'Transformer', 'DCB'];


// const initialEquipment = [
//   {
//     id: '1',
//     type: 'WMS',
//     name: 'WMS System A',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '2',
//     type: 'WMS',
//     name: 'WMS System B',
//     status: 'inactive',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '3',
//     type: 'WMS',
//     name: 'WMS System C',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '4',
//     type: 'WMS',
//     name: 'WMS System D',
//     status: 'inactive',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '5',
//     type: 'WMS',
//     name: 'WMS System E',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
  
//   // Inverters
//   {
//     id: '6',
//     type: 'Inverter',
//     name: 'Inverter A1',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '7',
//     type: 'Inverter',
//     name: 'Inverter B2',
//     status: 'inactive',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '8',
//     type: 'Inverter',
//     name: 'Inverter C3',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '9',
//     type: 'Inverter',
//     name: 'Inverter D4',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '10',
//     type: 'Inverter',
//     name: 'Inverter E5',
//     status: 'inactive',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   // Transformers
//   {
//     id: '11',
//     type: 'Transformer',
//     name: 'Main Transformer',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '12',
//     type: 'Transformer',
//     name: 'Backup Transformer',
//     status: 'inactive',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '13',
//     type: 'Transformer',
//     name: 'Secondary Transformer',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '14',
//     type: 'Transformer',
//     name: 'Auxiliary Transformer',
//     status: 'inactive',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '15',
//     type: 'Transformer',
//     name: 'Emergency Transformer',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
  
//   // DCB Units
//   {
//     id: '16',
//     type: 'DCB',
//     name: 'DCB Unit 1',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '17',
//     type: 'DCB',
//     name: 'DCB Unit 2',
//     status: 'inactive',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '18',
//     type: 'DCB',
//     name: 'DCB Unit 3',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '19',
//     type: 'DCB',
//     name: 'DCB Unit 4',
//     status: 'active',
//     lastUpdated: new Date().toLocaleString(),
//   },
//   {
//     id: '20',
//     type: 'DCB',
//     name: 'DCB Unit 5',
//     status: 'inactive',
//     lastUpdated: new Date().toLocaleString(),
//   }
// ];

function Equipment(){
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Equipment Status Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">Monitor the status of your equipment in real-time</p>
        </div>
    </div>
  );
}

export default Equipment