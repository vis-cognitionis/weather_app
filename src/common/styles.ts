import React from 'react';
import { StyleSheet } from "react-native";
import colors from '../constants/colors';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spacedRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    separator: {
        height: 0.3,
        width: '100%',
        backgroundColor: colors.gray,
        opacity: 0.8,
    },
    boldText: {
        fontWeight: 'bold',
    },
    contentContainerStyle: {
        paddingBottom: 200,
    },
    contentContainerStyle2: {
        paddingBottom: 100,
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignCenter: {
        alignItems: 'center',
    },
    error: {
        fontSize: 12,
        color: colors.red,
        padding: 2,
    },
    margin: {
        margin: 10,
    },
    padding: {
        padding: 10,
    },
    marginM: {
        margin: 16,
    },
    paddingM: {
        padding: 16,
    },
    marginL: {
        margin: 20,
    },
    paddingL: {
        padding: 20,
    },
    marginVertical: {
        marginVertical: 10,
    },
    marginHorizontal: {
        marginHorizontal: 16,
    },
})

export default Styles;