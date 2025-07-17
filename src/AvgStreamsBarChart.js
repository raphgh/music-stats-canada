import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { useTranslation } from 'react-i18next';

function AvgStreamsBarChart() {
  const { t } = useTranslation();

  const barChartData = [
    { song: t('song1'), average1: 107272 },
    { song: t('song2'), average2: 137363 },
    { song: t('song3'), average3: 121423 },
  ];

  return (
    <div style={{
      width: '100%',
      height: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        padding: 32,
        width: '100%',
        maxWidth: 800
      }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
          {t('chart2title')}
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            
            <XAxis dataKey="song" />
            
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="average1" fill="#ccc" label={{ position: 'top', formatter: (value) => value && value.toLocaleString() }} />
            <Bar dataKey="average2" fill="#CF4D6F" label={{ position: 'top', formatter: (value) => value && value.toLocaleString() }} />
            <Bar dataKey="average3" fill="#ccc" label={{ position: 'top', formatter: (value) => value && value.toLocaleString() }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AvgStreamsBarChart;
