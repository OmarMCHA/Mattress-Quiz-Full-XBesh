import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts'

const DashboardContainer = styled.div`
  padding: 1rem;
`

const Header = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: var(--text-dark);
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`

const StatTitle = styled.h3`
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
`

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary);
`

const ChartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  height: 400px;
`

const ChartTitle = styled.h2`
  font-size: 1.2rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
`

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

// Mock data - in a real app, this would come from your backend
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

function Dashboard() {
  // In a real implementation, you would fetch this data from your backend
  const [stats, setStats] = useState({
    totalQuizzes: 1248,
    completionRate: 78,
    avgTimeMinutes: 4.2,
    buyButtonClicks: 312
  })
  
  const [mattressData, setMattressData] = useState([
    { name: 'Saatva Classic', value: 187 },
    { name: 'Tempur-Pedic', value: 164 },
    { name: 'Helix Midnight', value: 143 },
    { name: 'WinkBed', value: 129 },
    { name: 'Purple Hybrid', value: 112 },
    { name: 'Others', value: 201 }
  ])
  
  const [dropoffData, setDropoffData] = useState([
    { name: 'Q1: Sleep Position', dropoffs: 42 },
    { name: 'Q2: Body Weight', dropoffs: 38 },
    { name: 'Q3: Body Type', dropoffs: 29 },
    { name: 'Q4: Pain Points', dropoffs: 51 },
    { name: 'Q5: Medical Conditions', dropoffs: 33 },
    { name: 'Q6: Temperature', dropoffs: 27 },
    { name: 'Q7: Bed Sharing', dropoffs: 19 },
    { name: 'Q8: Partner Movement', dropoffs: 15 },
    { name: 'Q9: Budget', dropoffs: 22 },
    { name: 'Q10: Durability', dropoffs: 18 },
    { name: 'Q11: Mattress Feel', dropoffs: 14 },
    { name: 'Q12: Firmness', dropoffs: 12 },
    { name: 'Q13: Allergies', dropoffs: 16 },
    { name: 'Q14: Motion Transfer', dropoffs: 9 },
    { name: 'Q15: Mattress Type', dropoffs: 11 },
    { name: 'Q16: Eco-Friendly', dropoffs: 8 }
  ])
  
  const [firmnessData, setFirmnessData] = useState([
    { name: 'Soft (3-4)', value: 187 },
    { name: 'Medium-Soft (4-5)', value: 246 },
    { name: 'Medium (5-6)', value: 312 },
    { name: 'Medium-Firm (6-7)', value: 289 },
    { name: 'Firm (7-8)', value: 142 }
  ])
  
  const [answerData, setAnswerData] = useState([
    { name: 'Side Sleepers', value: 498 },
    { name: 'Back Pain', value: 412 },
    { name: 'Hot Sleepers', value: 387 },
    { name: 'Motion Isolation', value: 276 },
    { name: 'Eco-Friendly', value: 198 }
  ])

  return (
    <DashboardContainer>
      <Header>Dashboard</Header>
      
      <StatsGrid>
        <StatCard>
          <StatTitle>Total Quizzes Taken</StatTitle>
          <StatValue>{stats.totalQuizzes}</StatValue>
        </StatCard>
        
        <StatCard>
          <StatTitle>Completion Rate</StatTitle>
          <StatValue>{stats.completionRate}%</StatValue>
        </StatCard>
        
        <StatCard>
          <StatTitle>Avg. Completion Time</StatTitle>
          <StatValue>{stats.avgTimeMinutes} min</StatValue>
        </StatCard>
        
        <StatCard>
          <StatTitle>Buy Button Clicks</StatTitle>
          <StatValue>{stats.buyButtonClicks}</StatValue>
        </StatCard>
      </StatsGrid>
      
      <ChartGrid>
        <ChartContainer>
          <ChartTitle>Recommended Mattresses</ChartTitle>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={mattressData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {mattressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        
        <ChartContainer>
          <ChartTitle>Firmness Preferences</ChartTitle>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={firmnessData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {firmnessData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </ChartGrid>
      
      <ChartContainer>
        <ChartTitle>Quiz Drop-off by Question</ChartTitle>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={dropoffData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="dropoffs" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      
      <ChartContainer>
        <ChartTitle>Top User Preferences</ChartTitle>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={answerData}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 100,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardContainer>
  )
}

export default Dashboard
