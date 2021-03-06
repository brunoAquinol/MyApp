import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-community/picker';

import styles from './Style';

export default function NewOrder(){
    return(
        <View style={styles.container}>
            <Text style={styles.menu}>Criar Nova Comanda</Text>
                <View style={styles.content}>
                    <Text style={styles.text}>Estabelecimento:</Text>
                    <Picker style={styles.pickerStyle}/>
                </View>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addBtnTex}>Adicionar Novo Estabelecimento</Text>
                    </TouchableOpacity>
                    
                <View style={styles.content}>
                    <Text style={styles.text}>Tipo de Pedido:</Text>
                    <Picker/>
                </View>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addBtnTex}>Adicionar Novo Tipo de Pedido</Text>
                    </TouchableOpacity>

                <View style={styles.content}>
                    <Text style={styles.text}>Produto:</Text>
                    <Picker/>
                </View>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addBtnTex}>Adicionar Novo Produto</Text>
                    </TouchableOpacity>

                <View style={styles.contentPrice}>
                    <Text style={styles.text}>Valor:  </Text>
                    <Text style={styles.text}>R$ </Text><TextInput style={styles.priceInput}/>
                </View>

                <TouchableOpacity style={styles.createBtn}>
                    <Text style={styles.createBtnTxt}>Criar</Text>
                </TouchableOpacity>

        </View>
    );

}