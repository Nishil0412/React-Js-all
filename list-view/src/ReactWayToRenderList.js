import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ReactWayToRenderList = () => {
  const tips = [
    'Use Array.map',
    'Not a for loop',
    'Give each item a unique key',
    'Avoid using array index as the key'
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>The "React Way" to Render a List</h2>
      <ul style={styles.list}>
        {tips.map((tip, index) => (
          <li key={index} style={styles.listItem}>
            <CheckCircleIcon style={styles.checkmark} />
            <input type="text" style={styles.input} defaultValue={tip} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#a1cf64',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'left',
  },
  heading: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: '30px',
    marginBottom: '20px'
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0'
  },
  listItem: {
    backgroundColor: '#a1cf64',
    padding: '10px 15px',
    borderRadius: '5px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',  // Align the checkmark to the right
    position: 'relative'
  },
  input: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px' // Space for the checkmark
  },
  checkmark: {
    color: '#6bb700',
    fontSize: '35px',
    marginRight:'10px'
  }
};

export default ReactWayToRenderList;
