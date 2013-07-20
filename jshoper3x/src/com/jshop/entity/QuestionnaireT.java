package com.jshop.entity;

// Generated 2013-7-16 21:38:58 by Hibernate Tools 4.0.0

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * QuestionnaireT generated by hbm2java
 */
@Entity
@Table(name = "questionnaire_t", catalog = "jshoper3")
public class QuestionnaireT implements java.io.Serializable {

	private String qid;
	private String question;
	private String choosetag;
	private String answer;
	private String inputtype;
	private String state;
	private int statistics;
	private String goodsid;
	private Date createtime;
	private String creatorid;
	private int versiont;
	private String title;

	public QuestionnaireT() {
	}

	public QuestionnaireT(String qid, String question, String choosetag,
			String answer, String inputtype, String state, int statistics,
			String goodsid, Date createtime, String creatorid, int versiont,
			String title) {
		this.qid = qid;
		this.question = question;
		this.choosetag = choosetag;
		this.answer = answer;
		this.inputtype = inputtype;
		this.state = state;
		this.statistics = statistics;
		this.goodsid = goodsid;
		this.createtime = createtime;
		this.creatorid = creatorid;
		this.versiont = versiont;
		this.title = title;
	}

	@Id
	@Column(name = "QID", unique = true, nullable = false, length = 20)
	public String getQid() {
		return this.qid;
	}

	public void setQid(String qid) {
		this.qid = qid;
	}

	@Column(name = "QUESTION", nullable = false)
	public String getQuestion() {
		return this.question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	@Column(name = "CHOOSETAG", nullable = false, length = 10)
	public String getChoosetag() {
		return this.choosetag;
	}

	public void setChoosetag(String choosetag) {
		this.choosetag = choosetag;
	}

	@Column(name = "ANSWER", nullable = false)
	public String getAnswer() {
		return this.answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	@Column(name = "INPUTTYPE", nullable = false, length = 45)
	public String getInputtype() {
		return this.inputtype;
	}

	public void setInputtype(String inputtype) {
		this.inputtype = inputtype;
	}

	@Column(name = "STATE", nullable = false, length = 1)
	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Column(name = "STATISTICS", nullable = false)
	public int getStatistics() {
		return this.statistics;
	}

	public void setStatistics(int statistics) {
		this.statistics = statistics;
	}

	@Column(name = "GOODSID", nullable = false, length = 20)
	public String getGoodsid() {
		return this.goodsid;
	}

	public void setGoodsid(String goodsid) {
		this.goodsid = goodsid;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATETIME", nullable = false, length = 0)
	public Date getCreatetime() {
		return this.createtime;
	}

	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}

	@Column(name = "CREATORID", nullable = false, length = 20)
	public String getCreatorid() {
		return this.creatorid;
	}

	public void setCreatorid(String creatorid) {
		this.creatorid = creatorid;
	}

	@Column(name = "VERSIONT", nullable = false)
	public int getVersiont() {
		return this.versiont;
	}

	public void setVersiont(int versiont) {
		this.versiont = versiont;
	}

	@Column(name = "TITLE", nullable = false)
	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
