import streamlit as st

st.title("Number Analyzer")
st.write("Enter a number and click the button to see simple results.")

number = st.number_input("Enter a number", value=0.0)

if st.button("Analyze"):
    st.write(f"Entered number: {number}")
    st.write(f"Square: {number ** 2}")
    st.write(f"Double: {number * 2}")
    st.write(f"Half: {number / 2}")
