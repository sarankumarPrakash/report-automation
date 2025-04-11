import React, { useState, useEffect } from 'react';
import { 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormGroup, 
  Button,
  Paper,
  Typography,
  TextField,
  Chip,
  OutlinedInput,
  Checkbox,
  ListItemText
} from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Download, FileSpreadsheet } from 'lucide-react';
import dayjs from 'dayjs';
import ExcelJS from 'exceljs';
import axios from 'axios'; // Import axios

const equipmentOptions = {
  WMS: ['Temperature', 'Humidity', 'Pressure', 'Air Quality'],
  Inverter: ['Voltage', 'Current', 'Power Factor', 'Efficiency'],
  Transformer: ['Primary Voltage', 'Secondary Voltage', 'Load', 'Oil Temperature'],
  DCB: ['Circuit Status', 'Current Rating', 'Fault History', 'Operating Temperature']
};

export default function ReportGenerator() {
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs());
  const [reportData, setReportData] = useState([]);


  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
    setSelectedTags([]);
  };
 
  const handleTagChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const fetchReportData = async () => {
    try {
      const response = await axios.post('/api/report', {
        equipment: selectedEquipment,
        tags: selectedTags,
        fromDate: fromDate.format('YYYY-MM-DD'),
        toDate: toDate.format('YYYY-MM-DD')
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching report data:', error);
    }
  };

  const handleGenerateReport = () => {
    fetchReportData();
  };

  const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Report');
    worksheet.columns = [{ header: 'Timestamp', key: 'timestamp' }, ...selectedTags.map(tag => ({ header: tag, key: tag }))];
    reportData.forEach(item => worksheet.addRow(item));

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedEquipment}_Report_${fromDate.format('YYYYMMDD')}-${toDate.format('YYYYMMDD')}.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '20px',
        overflow: 'auto',
        backgroundColor: 'white', // Set background color to white
        color: 'black' // Ensure text color is black for better contrast
      }}
    >
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white' }}>
        <Typography variant="h4" className="mb-6 text-center" sx={{ color: 'black' }}>
          Report Automation
        </Typography>

        {/* Line break */}
        <Box sx={{ marginBottom: '20px' }}></Box>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormControl fullWidth>
            <InputLabel sx={{ color: 'black' }}>Equipment Type</InputLabel>
            <Select
              value={selectedEquipment}
              onChange={handleEquipmentChange}
              label="Equipment Type"
              sx={{ color: 'black' }}
            >
              {Object.keys(equipmentOptions).map(equipment => (
                <MenuItem key={equipment} value={equipment}>
                  {equipment}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedEquipment && (
            <FormControl fullWidth>
              <InputLabel sx={{ color: 'black' }}>Select Tags</InputLabel>
              <Select
                multiple
                value={selectedTags}
                onChange={handleTagChange}
                input={<OutlinedInput label="Select Tags" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} sx={{ color: 'black' }} />
                    ))}
                  </Box>
                )}
              >
                {equipmentOptions[selectedEquipment].map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    <Checkbox checked={selectedTags.indexOf(tag) > -1} />
                    <ListItemText primary={tag} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="From Date"
              value={fromDate}
              onChange={(newValue) => setFromDate(newValue)}
              maxDate={dayjs()} // Set maxDate to today
              renderInput={(params) => <TextField {...params} sx={{ color: 'black' }} />}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="To Date"
              value={toDate}
              onChange={(newValue) => setToDate(newValue)}
              maxDate={dayjs()} // Set maxDate to today
              renderInput={(params) => <TextField {...params} sx={{ color: 'black' }} />}
            />
          </LocalizationProvider>
        </div>

        <Box className="mt-6 flex gap-4 justify-center">
          <Button
            variant="contained"
            onClick={handleGenerateReport}
            disabled={!selectedEquipment || selectedTags.length === 0}
            startIcon={<FileSpreadsheet />}
            sx={{ color: 'black' }}
          >
            Generate Report
          </Button>
          
          <Button
            variant="outlined"
            onClick={handleDownloadExcel}
            disabled={reportData.length === 0}
            startIcon={<Download />}
            sx={{ color: 'black' }}
          >
            Download Excel
          </Button>
        </Box>

        {reportData.length > 0 && (
          <Box className="mt-6 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-200 p-2" style={{ color: 'black' }}>Timestamp</th>
                  {selectedTags.map(tag => (
                    <th key={tag} className="border border-gray-200 p-2" style={{ color: 'black' }}>{tag}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reportData.slice(0, 5).map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 p-2" style={{ color: 'black' }}>{row.timestamp}</td>
                    {selectedTags.map(tag => (
                      <td key={tag} className="border border-gray-200 p-2" style={{ color: 'black' }}>{row[tag]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {reportData.length > 5 && (
              <Typography variant="body2" className="mt-2 text-center text-gray-600" sx={{ color: 'black' }}>
                Showing first 5 rows of {reportData.length} total rows
              </Typography>
            )}
          </Box>
        )}
      </Paper>
    </Box>
  );
}