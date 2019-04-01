import React, {Component} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';

const papel = require('./imagens/papel.png');
const tesoura = require('./imagens/tesoura.png');
const pedra = require('./imagens/pedra.png');
const jokenpo=[pedra,papel,tesoura];

export default class App extends Component{
    state={
        you:0,
        computador:0,
        pontosUsuario: 0,
        pontosComputador: 0
    };
    Cpu=() => {
        const valor = Math.floor(Math.random()*3);
        this.setState({computador: valor});
    }
    jogador(escolha){
        this.setState({you:escolha});
        this.result()
        this.Cpu()
    }
    result(){
        const {you,computador}= this.state;
        
            if (computador=== 2 && you=== 1 ){
                this.setState({pontosComputador:this.state.pontosComputador+1});
            }
            else if (computador=== 1&& you===0){
                this.setState({pontosComputador:this.state.pontosComputador+1});
            }
            else if(computador=== 0 && you === 2){
                this.setState({pontosComputador:this.state.pontosComputador+1});
            }
            else if(you=== 0 && computador===2){
                this.setState({pontosUsuario:this.state.pontosUsuario+1});
            }
            else if(you=== 1 && computador===0){
                this.setState({pontosUsuario:this.state.pontosUsuario+1});
            }
            else if(you=== 2 && computador=== 1){
                this.setState({pontosUsuario:this.state.pontosUsuario+1});
            }
        }
        
    render(){
        const {you}= this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.texto}> JO-KEN-PO</Text>
                <Text style={styles.texto}> COMECE O JOGO</Text>
                    <View style={styles.layout}>
                        <View style={styles.game}>
                            <Text style={styles.placar}>Score Jogador</Text>
                            <Text style={styles.placares}>{this.state.pontosUsuario}</Text>
                        </View>
                         <View style={styles.game}>
                            <Text style={styles.texto}>Usuario</Text>
                            <Image style={styles.pic} source={jokenpo[you]}/>
                         </View>

                         <View style={styles.game}>
                            <Text style={styles.texto}>Cpu</Text>
                            <Image style={styles.pic} source={jokenpo[this.state.computador]}/>
                         </View>
                         <View style={styles.game}>
                            <Text style={styles.placar}>Score CPU</Text>
                            <Text style={styles.placares}>{this.state.pontosComputador}</Text>
                        </View>
                    </View>
            
                <View style={styles.touch}>
                    <Text style={styles.texto}>Escolha:</Text>
                        <TouchableOpacity onPress={()=> this.jogador(0)}>
                            <Text>Pedra</Text>
                            <Image style={styles.imag} source={pedra}/>
                        </TouchableOpacity>
                
                        <TouchableOpacity onPress={()=> this.jogador(1)}>
                            <Text>Papel</Text>
                            <Image style={styles.imag} source={papel}/>
                        </TouchableOpacity>
                
                        <TouchableOpacity onPress={()=> this.jogador(2)}>
                            <Text>Tesoura</Text>
                            <Image style={styles.imag} source={tesoura}/>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    },
    layout:{
        flexDirection:'row',
        marginTop:40,
        alignContent:"space-around",
        marginLeft:12,
        marginRight:12,
    },
    touch:{
        alignItems:'center',
        margin:50,
        flexDirection: 'row',
        padding:12,
    },
    texto:{
        fontSize:20,
        fontWeight: 'bold',
        backgroundColor: '#ffff',
        padding: 14,
        justifyContent:'center',
    },
    game:{
        alignItems:'center',
    },
    imag:{
        justifyContent:'center',
        marginTop: 1,
        height: 60,
        width: 60,
        padding: 25,
        borderRadius: 7,
        flexDirection:'row',
        marginVertical: 15,
        backgroundColor:'#FF0000',
    },
    pic:{
        width:60,
        height:60,
        margin:15,
        backgroundColor:'#00000f'
    },
    placar:{
        fontSize:16,
        backgroundColor:'#FFD700'
    },
    placares:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },

});
