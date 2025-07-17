import React, { useState } from 'react';
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

const genres = [
  { name: 'Pop', color: '#bbb' },
  { name: 'HipHop', color: '#ccc' },
  { name: 'Rock', color: '#ff7300' }
];

function GenreLineChart() {
  const { t } = useTranslation();
  const [visibleGenres, setVisibleGenres] = useState(genres.map(genre => genre.name));

  const toggleGenre = (genre) => {
    setVisibleGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
        {t('chart1title')}
      </h3>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {genres.map((genre) => (
          <label key={genre.name} style={{ marginRight: 15 }}>
            <input
              type="checkbox"
              checked={visibleGenres.includes(genre.name)}
              onChange={() => toggleGenre(genre.name)}
            />
            <span style={{ marginLeft: 5 }}>{genre.name}</span>
          </label>
        ))}
      </div>

      <ResponsiveContainer height={400}>
        <LineChart data={ageGenreData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="age" 
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

          {genres.map((genre) =>
            visibleGenres.includes(genre.name) ? (
              <Line
                key={genre.name}
                type="monotone"
                dataKey={genre.name}
                stroke={genre.color}
                strokeWidth={2.5}
                dot={true}
                activeDot={{ r: 6 }}
              />
            ) : null
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GenreLineChart;
