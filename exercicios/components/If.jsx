function If(props) {
  const { teste, children } = props;
  return teste ? children : null;
}

export default If;
