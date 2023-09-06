import React from 'react'

export default function Statistics({ title, stats }) {
    
     return (
              <section class="statistics">
         { title && <h2>{title}</h2> }
{/*    
         {stats.map(item => {
         <ul class="stat-list">
             <li key={item.id} Type={stats} class="item">
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}%</span>
    </li>
    <li key={item.id} Type={stats} class="item">
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}%</span>
    </li>
    <li key={item.id} Type={stats} class="item">
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}%</span>
    </li>
    <li key={item.id} Type={stats} class="item">
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}%</span>
    </li>
           </ul>
           })} */}
</section>
  )
}
