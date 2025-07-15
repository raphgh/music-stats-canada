import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { useTranslation } from 'react-i18next';

const ageGenreData = [
  { age: '13–17', Pop: 35, HipHop: 28, Rock: 12 },
  { age: '18–24', Pop: 30, HipHop: 32, Rock: 15 },
  { age: '25–34', Pop: 25, HipHop: 24, Rock: 22 },
  { age: '35–44', Pop: 18, HipHop: 15, Rock: 28 },
  { age: '45–54', Pop: 12, HipHop: 7,  Rock: 30 },
  { age: '55+',   Pop: 8,  HipHop: 4,  Rock: 25 },
];

function GenreLineChart() {

  const { t } = useTranslation();

  return (
    <div style={{ width: '100%', height: 500 }}>
      
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {t('chart1title')}
      </h3>

      <ResponsiveContainer>
        <LineChart data={ageGenreData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" 
              label={{
              value: t('chart1xaxis'),
              position: 'insideBottomRight',
              offset: -10,
              dy: 20,
            }}
          />
          <YAxis 
              label={{
              value: t('chart1yaxis'),
              angle: -90,
              position: 'insideLeft',
              dx: -10,
            }}
          />
          <Tooltip />
          <Legend />
          {/* Grey background genres */}
          <Line type="monotone" dataKey="Pop" stroke="#ccc" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="HipHop" stroke="#bbb" strokeWidth={2} dot={false} />
          
          {/* Highlighted genre */}
          <Line type="monotone" dataKey="Rock" stroke="#ff7300" strokeWidth={3} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GenreLineChart;
