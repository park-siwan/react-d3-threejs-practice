## 트랜지션

```javascript
.transition()
  .duration(3000)
  .ease(easeLinear);
  .style('fill', 'red')
  .attr('height', data2[index])
  .attr('y', 300 - data2[index]);
```

## 텍스트 넣는 방법

```javascript
svg
  .append('text')
  .attr('x', (barWidth + 10) * index)
  .attr('y', 300 - data - 10)
  .text(data)
  .style('font-size', '0.85em')
  .style('color', '#222');`
```

## 특정 bar 선택방법

```javascript
select('#bar0')
  .transition()
  .duration(1000)
  .ease(easeLinear)
  .style('fill', 'blue')
  .delay(3000);
```
