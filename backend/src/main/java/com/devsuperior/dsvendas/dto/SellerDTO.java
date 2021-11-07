package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SellerDTO implements Serializable{

	
	private static final long serialVersionUID = 1L;
	private Long id;
	private String nome;
	
	public SellerDTO() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public SellerDTO(Long id, String nome) {
		super();
		this.id = id;
		this.nome = nome;
	}
	

	public SellerDTO(Seller entity) {
		super();
		id = entity.getId();
		nome = entity.getName();
	}
	
	

}
