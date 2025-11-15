const FormField = ({ label, children }) => {
  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      {children}
    </div>
  );
};
export default FormField;

 