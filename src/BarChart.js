import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { useTranslation } from 'react-i18next';

const barChartData = [
];

function BarChart() {

  const { t } = useTranslation();

  return (

    <div style={{ width: '100%', height: 500 }}>
        
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {t('chart1title')}
        </h3>

        <ResponsiveContainer>
        <BarChart data={ageGenreData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
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
        </BarChart>
        </ResponsiveContainer>
    </div>
    );
}

export default BarChart;
